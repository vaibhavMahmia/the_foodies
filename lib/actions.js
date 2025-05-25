'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => !text || text.trim() == ' ';

export const shareMeal = async (prevState, formData) => {
    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) return {
        message: 'Invalid Input !'
    };

    await saveMeal(meal);
    revalidatePath('/meals'); //in production it will add newly created meal instantly to meals page or else it has pregenerated html 
    redirect('/meals');
}