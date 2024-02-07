

int ft_iterative_factorial(int nb)
{
  if (nb < 0)
    return 0; // Return 0 for invalid (negative) input
  if (nb == 0)
    return 1; // Handle the special case of 0! being 1

  int factorial = 1;
  for (int i = 1; i <= nb; i++)
  {
    factorial *= i;
  }

  return factorial; // Note: This may overflow if nb is too large, which is undefined behavior
}