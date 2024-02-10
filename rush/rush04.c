void ft_putchar(char c);

void print_line(int length, char start, char middle, char end)
{
  ft_putchar(start);
  while (--length > 1)
    ft_putchar(middle);
  if (length == 1)
    ft_putchar(end);
  ft_putchar('\n');
}

void rush(int x, int y)
{
  if (x > 0 && y > 0)
  {
    print_line(x, 'A', 'B', 'C');
    while (--y > 1)
      print_line(x, 'B', ' ', 'B');
    if (y == 1)
      print_line(x, 'C', 'B', 'A');
  }
}