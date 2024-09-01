"use server";

import { getBus } from "./bus";

export async function searchBus(prevData, formData) {
  const starting_location = formData.get("from").trim().toLowerCase();
  const ending_location = formData.get("destination").trim().toLowerCase();
  let errors = [];
  if (
    !starting_location ||
    starting_location.trim().length == 0 ||
    !ending_location ||
    ending_location.trim().length == 0
  ) {
    errors.push("Please enter valid data");
  }
  if (errors.length > 0) {
    return { errors };
  }
      console.log(starting_location, ending_location);
      const bus = await getBus(starting_location,ending_location );
      if(!bus){
        console.log('no buses available at the moment');
      }else{
        console.log(bus);
      }
      return {errors};
}
