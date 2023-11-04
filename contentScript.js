(() => {
  const urlParams = new URLSearchParams(document.location.search);

  const module = {
    companyCode: urlParams.get('companyCode'),
    name: urlParams.get('moduleName'),
  };
  console.log(module);

  const addressKey = `ximmio-address_${module.companyCode}`;

  console.log(addressKey);
  const address = localStorage.getItem(addressKey);

  if (address) {
    console.log(JSON.parse(address));
  }

  const allLocal = localStorage.getItem(key);

  // chrome.runtime.onMessage.addListener((obj, sender, response) => {
  //   console.log('hello ', obj);
  // });

  //   const addNewBookmarkEventHandler = () => {
  //     const currentTime = youtubePlayer.currentTime;
  //     const newBookmark = {
  //       time: currentTime,
  //       desc: 'Bookmark at ' + getTime(currentTime),
  //     };
  //     console.log(newBookmark);

  //     chrome.storage.sync.set({
  //       [currentVideo]: JSON.stringify(
  //         [...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time)
  //       ),
  //     });
  //   };
})();
