def naturalSum(n):

    sum = 0

    for i in range (n + 1):
        sum += i

    return sum

result = naturalSum(100)
print(result)
