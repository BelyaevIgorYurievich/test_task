export const sortArray = ( sortBy, isAscendSort ) => ( a, b ) => {

  if (isAscendSort)	{
  	if (a[sortBy] < b[sortBy]) return 1;
  	if (a[sortBy] > b[sortBy]) return -1
  }	
  	if (a[sortBy] > b[sortBy]) return 1;
  	if (a[sortBy] < b[sortBy]) return -1
}