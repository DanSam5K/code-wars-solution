#include <unistd.h>
#include <stdlib.h>

void ft_putchar(char c)
{
  write(1, &c, 1);
}

void print_grid(int grid[4][4])
{
  int i;
  int j;
  i = 0;
  while (i < 4)
  {
    j = 0;
    while (j < 4)
    {
      ft_putchar(grid[i][j] + '0');
      if (j != 3)
        ft_putchar(' ');
      j++;
    }
    ft_putchar('\n'); // Correct placement of newline
    i++;
  }
}

int is_valid_placement(int grid[4][4], int row, int col, int num)
{
  int x;

  x = 0;
  while (x < 4)
  {
    if (grid[row][x] == num || grid[x][col] == num)
      return (0);
    x++;
  }
  return (1);
}

int check_line_visibility(int grid[4], int max_visible)
{
  int visible;
  int max_height;

  visible = 1;
  max_height = grid[0];
  while (visible < 4)
  {
    if (grid[visible] > max_height)
    {
      max_height = grid[visible];
    }
    visible++;
  }
  return (visible == max_visible);
}

int check_visibility(int grid[4][4], int constraints[16])
{
  int line[4];
  int col;
  int row;
  int i;
  int j;

  col = 0;
  while (col < 4)
  {
    i = 0;
    while (i < 4)
    {
      line[i] = grid[i][col];
      i++;
    }
    if (!check_line_visibility(line, constraints[col]))
      return (0);
    i = 0;
    j = 3;
    while (i < 4)
    {
      line[i] = grid[j][col];
      i++;
      j--;
    }
    if (!check_line_visibility(line, constraints[4 + col]))
      return (0);
    col++;
  }
  row = 0;
  while (row < 4)
  {
    i = 0;
    while (i < 4)
    {
      line[i] = grid[row][i];
      i++;
    }
    if (!check_line_visibility(line, constraints[8 + row]))
      return (0);
    i = 0;
    j = 3;
    while (i < 4)
    {
      line[i] = grid[row][j];
      i++;
      j--;
    }
    if (!check_line_visibility(line, constraints[12 + row]))
      return (0);
    row++;
  }
  return (1);
}

int solve(int grid[4][4], int constraints[16], int position)
{
  int num;
  int row;
  int col;

  if (position == 16)
    return (check_visibility(grid, constraints));
  row = position / 4;
  col = position % 4;
  num = 1;
  while (num <= 4)
  {
    if (is_valid_placement(grid, row, col, num))
    {
      grid[row][col] = num;
      if (solve(grid, constraints, position + 1))
        return (1);
      grid[row][col] = 0;
    }
    num++;
  }
  return (0);
}

int char_to_int(char c)
{
  if (c >= '1' && c <= '4')
  {
    return c - (0);
  }
  return -1;
}

int parse_constraints(char *input, int *constraints)
{
  int index;
  int i;
  int val;

  index = 0;
  i = 0;
  while (input[i] != '\0')
  {
    if (input[i] == ' ' || input[i] == '\0')
      continue;
    val = char_to_int(input[i]);
    if (val == -1)
    {
      write(1, "Error\n", 6);
      return (-1);
    }
    constraints[index++] = val;
    if (index > 15)
    {
      write(1, "Error\n", 6);
      return (-1);
    }
    i++;
  }
  if (index != 16)
  {
    write(1, "Error\n", 6);
    return (-1);
  }
  return (0);
}

int main(int argc, char **argv)
{
  int(*grid)[4] = malloc(4 * 4 * sizeof(int)); // Dynamic allocation for 4x4 grid
  int *constraints = malloc(16 * sizeof(int)); // Dynamic allocation for constraints
  int i;
  int j;

  if (argc != 2 || !grid || !constraints)
  {
    write(1, "Error\n", 6);
    free(grid); // Ensure to free allocated memory
    free(constraints);
    return (1);
  }

  // Initialize grid to 0
  i = 0;
  while (i < 4)
  {
    j = 0;
    while (j < 4)
    {
      grid[i][j] = 0;
      j++;
    }
    i++;
  }

  if (parse_constraints(argv[1], constraints) != 0)
  {
    free(grid);
    free(constraints);
    return (1);
  }

  if (solve(grid, constraints, 0))
  {
    print_grid(grid);
  }
  else
  {
    write(1, "Error\n", 6);
  }

  free(grid); // Free dynamically allocated memory
  free(constraints);
  return (0);
}