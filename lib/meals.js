import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); //just to add a delay to show loading state
    //throw new Error('Loading meals failed !');
    return db.prepare('SELECT * FROM meals').all();
}

export const getMeal = (slug) => db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);