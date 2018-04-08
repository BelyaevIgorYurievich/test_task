export function changeSortingTable(nameTable) {

  return {
    type: 'CHANGE__SORTING__TABLE',
    payload: nameTable
  }

}

export function downloadNextPage() {
	return {
		type: 'DOWNLOAD__NEXT__PAGE'
	}
}
