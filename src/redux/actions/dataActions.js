export const CREATE_GALLERY = 'CREATE_GALLERY';
export const ADD_GALLERY = 'ADD_GALLERY';
export const FAIL_GALLERY = 'FAIL_GALLERY';

export function create(gallery) {
  return { type: CREATE_GALLERY , payloads: gallery };
}


export function add(page) {
  return { type: ADD_GALLERY, payloads: page };
}

