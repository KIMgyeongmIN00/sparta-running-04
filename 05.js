/**
 * [05.js]
 *
 * - userTodos 배열 안에는 userId, title, completed, priority 속성을 가진 객체들이 있습니다. //배열 안 객체 {userId: , title: , completed: , priority: }
 * - filterUserTodos 함수를 작성하세요.
 *   1) userId가 일치하고  // filter
 *   2) priority가 일치하며 // filter
 *   3) completed가 false인 항목들의 title만 뽑아서 문자열 배열로 만들어 반환하세요. // map
 *
 * @param {Array} userTodos
 * @param {number} userId
 * @param {string} priority
 * @returns {string[]}
 */

function filterUserTodos(userTodos, userId, priority) {
  const checkUser = userTodos.filter(arr => arr.userId === userId && arr.priority === priority && arr.completed === false);
  const getTitle = checkUser.map(arr => arr.title);
  return getTitle;
}

// export 수정 불가
export { filterUserTodos };
