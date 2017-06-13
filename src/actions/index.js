export function selectBook(book){
  // An action creator returns an action.
  return({
    type: 'BOOK_SELECTED',
    payload: book
  });
}
