export const EDIT_LOAD = 'EDIT_LOAD';
export const FAIL_LOAD = 'FAIL_LOAD';

export function edit(bool) {
  return { type: EDIT_LOAD , payloads: bool };
}
