import Loki from 'lokijs';
import LokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter';

const adapter = new LokiIndexedAdapter();

export const db = new Loki('my-db', { adapter });

export const dbReady = new Promise<void>((resolve) => {
  db.loadDatabase({}, () => {
    const collections = ['costs'];

    for (const name of collections) {
      if (!db.getCollection(name)) {
        db.addCollection(name, {
          indices: ['name', 'amount', 'category', 'date'],
          autoupdate: true,
        });
      }
    }

    db.saveDatabase();
    console.log('Database loaded');
    resolve();
  });
});

export default db;
