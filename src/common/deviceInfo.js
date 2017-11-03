let deviceInfo = {

}
let ua = window.navigator.userAgent
let n = ua.toLowerCase()
let detect = (p) => {
  return p.test(n)
}
deviceInfo.isChrome = detect(/chrome/i)
deviceInfo.isSafari = detect(/safari/i)
deviceInfo.isFirefox = detect(/firefox/i)
deviceInfo.isVivaldi = detect(/vivaldi/i)
deviceInfo.isOpera = detect(/opera/i)
deviceInfo.isOperaMini = detect(/opera mini/i)
deviceInfo.isEdge = detect(/edge/)
deviceInfo.isIE = detect(/msie/i)
deviceInfo.isMidori = detect(/midori/i)
deviceInfo.isMaxthon = detect(/maxthon/i)
deviceInfo.isNetscape = detect(/netscape/i)
deviceInfo.isKonqueror = detect(/konqueror/i)
deviceInfo.isMinefield = detect(/minefield/i)
deviceInfo.isOmniWeb = detect(/omniweb/i)
deviceInfo.isUCBrowser = detect(/ucbrowser/)
deviceInfo.isWeiXin = detect(/micromessenger/i)

deviceInfo.isWebkit = detect(/webkit/i)
deviceInfo.isGecko = detect(/gecko/i)
deviceInfo.isPresto = detect(/presto/i)
deviceInfo.isTrident = detect(/trident/i)
deviceInfo.isAvantBrowser = detect(/avant browser/i)
deviceInfo.isSeaMonkey = detect(/seamonkey/i)
deviceInfo.isDeepnetExplorer = detect(/deepnet/i)
deviceInfo.isDorothy = detect(/dorothy/i)
deviceInfo.isFennec = detect(/fennec/i)
deviceInfo.isMaemo = detect(/maemo/i)

deviceInfo.isPhone = detect(/(iphone|ipod|((?:android)?.*?mobile)|j2me|mobi|blackberry|nokia|maemo|mini)/i)
deviceInfo.isAndroid = detect(/android/i)
deviceInfo.isIOS = detect(/(ipad|iphone|ipod)/i)
export default deviceInfo
