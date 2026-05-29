export const getSave = async (debug = false) => {
  try {
    const save = await window.store.get('save');
    if (debug) {
      console.log('Save successfully loaded!');
      console.log(save);
    }
    return save;
  } catch (e) {
    console.error(e);
  }
};

export const clearSave = async (debug = false) => {
  try {
    await window.store.set('save', {});
    if (debug) {
      console.log('Save successfully deleted!');
      console.log(await getSave(false));
    }
  } catch (e) {
    console.error(e);
  }
};

export const isSaveValid = (save) => {};
