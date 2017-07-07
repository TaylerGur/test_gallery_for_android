export const EDIT_PAGE = 'EDIT_PAGE';
export const FAIL_PAGE = 'FAIL_PAGE';

export function edit(page) {
  return { type: EDIT_PAGE , payloads: page };
}
