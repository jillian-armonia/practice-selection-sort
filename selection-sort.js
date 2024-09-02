

function selectionSort(arr) {

  let copy = arr.slice(0); // Copy the original array

  let sorted = []; // Create an array to store the sorted values

  while (copy.length > 0){ // While the array is not empty...
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;

    for (let i = 1; i < copy.length; i++){
      if (copy[i] < copy[minIndex]){
        minIndex = i;
        break;
      }
    }
    // Save and remove the value at the min index
    let min = copy[minIndex]
    copy.splice(minIndex, 1);

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }

  return sorted;

}



function selectionSortInPlace(arr) {

  let pointer = 0; // Set a pointer at zero dividing the array into sorted and unsorted halves

  while (pointer < arr.length){ // Repeat while the unsorted half is not empty:
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = pointer;

    for (let i = pointer + 1; i < arr.length; i++){
      if (arr[i] < arr[minIndex]){
        minIndex = i;
        break;
      }
    }

    let min = arr[minIndex]; // Save the min value

    for (let i = minIndex; i >= pointer; i--){
      // Shift every unsorted value to the left of the min value to the right by 1
      arr[i] = arr[i - 1];
    }

    arr[pointer] = min; // Put the min value at the divider

    pointer++;// Increment the divider and repeat
  }

}


module.exports = [selectionSort, selectionSortInPlace];
