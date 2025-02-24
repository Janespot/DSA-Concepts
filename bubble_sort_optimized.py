def bubble_sort(lst):
  size = len(lst)

  for i in range(size):
    # initialize swapped to False
    swapped = False

    # loop through the list one less time than the previous loop by subtracting i from loop count
    for j in range(size - 1 - i):
      if lst[j] > lst[j + 1]:
        lst[j], lst[j + 1] = lst[j + 1], lst[j]

        # set swapped to True if the list got swapped
        swapped = True

        # if the list wasnt swapped, it means the lst is already sorted, we break the loop and return the sorted lst
        if not swapped:
          break

  return lst
