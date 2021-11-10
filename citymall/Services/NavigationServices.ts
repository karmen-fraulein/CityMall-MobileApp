import {NavigationContainerRef} from '@react-navigation/core';


let navigatorRef: NavigationContainerRef | undefined = undefined;
export let OpenDrawer: Function[] = [() => {}, () => {}];
export let CloseDrawer: Function[] = [() => {}, () => {}];
export let ToggleDrawer: Function[] = [() => {}, () => {}];

let backHandler = () => {}

const setBackHandler = (fn: () => void) => {
  backHandler = fn;
}

function setDrawerOpen(ref: Function, index: number) {
    OpenDrawer[index] = ref;
  }
  
  function setDrawerClose(ref: Function, index: number) {
    CloseDrawer[index] = ref;
  }
  
  function setDrawerToggle(ref: Function, index: number) {
    ToggleDrawer[index] = ref;
  }

  const GoBack = () => {
      console.log('aqane')
    backHandler();
    navigatorRef?.goBack();
  }

  export default {
    setDrawerOpen,
    setDrawerClose,
    setDrawerToggle,
    setBackHandler,
    GoBack
  };

