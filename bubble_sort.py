def sort_list(lst):
  size = len(lst)

  for i in range(size):
    for j in range(size - 1):
      if lst[j] > lst[j + 1]:
        lst[j], lst[j + 1] = lst[j + 1], lst[j]

  return lst
