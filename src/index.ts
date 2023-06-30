const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'rc4xi6txw1h0igsqa62stbtdc';

// declare this file is a module
export { };

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener('load', async function () {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
  }
  catch (e) {
    console.error(e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
  // ###################################################################
  // link
  await sdk.Link.setShareLinkPolicy(sdk.Link.CreationPolicy.WINDOW);
  const link = await sdk.Link.createLink();
  console.log(link); // should log a link to your page that embeds Showcase
  console.log("링크 바꾸기 성공");
  await sdk.Asset.registerTexture('customTextureId0', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBfj0GdWn5WFn8bT8p5SVugeJOwAbBJfZPKBc9Kc&s');
  await sdk.Pointer.editTexture('customTextureId0');
  console.log("포인터 바꾸기 성공");
  // ###################################################################

});