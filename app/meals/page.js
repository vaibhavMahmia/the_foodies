import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
// Yes next server components can be async..............
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}

export const metadata = {
  title: 'All Meals NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

const MealsPage = () => {
  
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created{' '} <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favourite recipie and cook it yourself, It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
    
  )
}

export default MealsPage