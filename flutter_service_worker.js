'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7a7acd77294413ee5c18cbbba0661e3",
".git/config": "6ed4fd0925d7017f4bb5c633574fea3d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e2609cdcf55a58f52e7f36cf08de657",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85f2c0e9afc5c54b5e5eeb6f22d3bb3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb541fcaa499059c23e3126d9761f48e",
".git/logs/refs/heads/master": "bb541fcaa499059c23e3126d9761f48e",
".git/logs/refs/remotes/origin/HEAD": "edd75b4fd352d7c30ebc5dd60f3f8c30",
".git/logs/refs/remotes/origin/master": "32d060af7f8cdb641adeb95688c007aa",
".git/objects/0a/f3fd4ca51475e3db805b5a6425d2a9d5375a27": "1cb01249fbf775e220a493b41b0bb535",
".git/objects/0c/d2b217543e59f76861935ff2c799d9b84a1f9a": "f7bb2cbc66596af9ebd96129ad00aee6",
".git/objects/11/b963ccedc33ef5f8fed57de5bd27a01397a6da": "d83921dd73040020eadb7d661e8c1f6a",
".git/objects/14/44a672b0b1a9c5e55371c4312ace9c40e2a267": "d319d9d8c4252b5aecc57e18b2b341ad",
".git/objects/16/fa9bbddbfa92287804a9b4ae594c4ef4763cfc": "2de58549b1465fc219d96182ee02ea3e",
".git/objects/1a/7adb820bcb8f00fe3ed4ad3c42d0141121a679": "9dc0891e50f569799d9b5fdd18de0a85",
".git/objects/1b/e6dd1ebe580305c9cedbbff3ed99b0108d3b1b": "6051e6a0eaa4b2ca79113af4fae28a57",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1f/ec3c4d4e00b46b6abf02f069202aa3cae1ad70": "459c26f65229fff111c4694226fba4bc",
".git/objects/21/e3f9fdb4b950f3eb6d6dc438258095fc6bc87e": "3b5af9b75af2d2cb51b0f73b92085c9d",
".git/objects/25/f52249aca761f736732a5aa789b51f183ba4f8": "20f27639fcc34e496d809093f1921a83",
".git/objects/28/d4f86bbb293d481dc6a20ad3f2b167924693d8": "23acf7b2d40c4addcae392a7a805d456",
".git/objects/2c/6c0266554d2bf12d8f862bf37ce96ba28acf14": "2acc95effb049db60b55173ed8d9d354",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/671998feb42bc9a0ca0d43ce1d1e9e0ca2f62f": "b0647d888284b5d64ca59a392dd8ad88",
".git/objects/37/d64534d6db9bd7c1cd924252f951d5787b8594": "78b5dd8b418d79a95470efe8fc7fc2b9",
".git/objects/3f/0733d9ee722e1d3a6221e81c026c4c1094d640": "c3f6863a9a7ba0775c8da75846fa2554",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4b/1d86dd2d2691d7046d2215e07ffed45374c7a2": "3dbeeee7add090b9e1ca9633689c7a5d",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/53/ea836de5e4a448ad9927e173f898d9f84e81c2": "a655a9eea741e063000d06864c2e936e",
".git/objects/56/a314ee6ec6cce556da68e0982d3d19926042c6": "c5b828c63965e51b96ce9015eb5ddac7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/a0726b6356a455cb582822c1050071061ab239": "2e646a40de3678c4efd8b11453c1a3c3",
".git/objects/5a/74534ab45ab1576bfe556f504ed0c9f6599157": "d849ac589e777fb44e0eaeabf1471e5d",
".git/objects/5d/5afa67c28ac4ebbeab94bb1d823a7c90cb0503": "7e9027e44a1b2f484f1099e4c31a5e24",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/a4aecd37e69df42bc7623ff7d0260fb250cc40": "f2e6765876f6d96e2e2a2e29c9c0bc75",
".git/objects/65/d485269b6d974429b32b742e33c56e9427166f": "68f7f9e0b711e4780365552d67759f17",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/a06b1e406bf88723024fa781c1e5c6c95b6933": "6f93227a562322e0ead4dda5cdfec97c",
".git/objects/70/70322dc63a7def4c187bd5b9c32647fd49eae6": "ea7e8ca64712e0c757a580de743bf1f2",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/87/2489d30b0f26298dff58fd9f383a046e000496": "ba6443b6403e448486431f40be208724",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1f205ce1547ce48113c57bf191f8950ef0ff46": "cc90208066ba5baeff0a078d8e51863f",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/6a75fc8c5649e97513f405976963b130ba121c": "cc9d970736a08c2fa53ccc05d2b44d8c",
".git/objects/9a/18376dd3cf5aa0d6dc8513df3c055690b4c5ff": "2971820a8f06572765de866aee8b94d7",
".git/objects/9c/91a8864dc160687f007c4ab463a84fde3c2203": "ac50bd6ddc2de5c4e5e53e7ed1fbc6df",
".git/objects/9f/53f2c04702a1a1c0e4ab78f2df1cbd44667f62": "2188bafbba4c9b390355072a25ebdddf",
".git/objects/a1/63b371d738635f3966c091e136d17d9187d3cd": "1b1eb9ea4c761099ce8dddf7c2cda7fb",
".git/objects/a2/84cbd11537b287bc9c9381ff25fc982dc2ce41": "2402babe6975b43aacfda056373204aa",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/9988bfbabbbf42490b3c3610d85475594fc161": "34e57dd1e362f6b5648b5795e87e9f0f",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/93aba887d0c8c9556864743fde8b75d70ea7e1": "3048d15f67f27f49fdef6a20e47f3cf7",
".git/objects/ab/2575be35284dd5b152f1caf290b5408202612b": "78904afd27620b741cdd78122ab278de",
".git/objects/ad/af6718ab6b375374b2c16124607bc467eeaa5e": "211a3c1b45f394664be05717d05a55b8",
".git/objects/b5/5ea2d7723a84c4f734d1828823eee2974dd1d1": "b50d3d19c011b75d9a9f2886c1f90d97",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/c3bf1ab36bc6bfc7d6c8d4a73079eba75fa708": "72282cb49d0c9e06c36ad0282db15f65",
".git/objects/c2/6b382931dec304e3f872b930177ba70a64ddca": "f73eb58e45409ffcdfe477f5b7206d68",
".git/objects/c7/30ba545e45797fe745d76651890b40a045417c": "2a74ad476263b6707cce3a0103ab9dcd",
".git/objects/c8/622d18118cf4dfc993cf3d07cb0adbed2a9dea": "9af8b120b88b4208de432d7c0527c337",
".git/objects/cd/0885f17f35b622c2471ebd6737d48eb395db78": "2d31d8e5ce212375e5474292e06010dc",
".git/objects/cd/26ca04253aed95b6e8f5554eede8024dad3c4d": "d888c13825cc490a490ab71b7f5ef084",
".git/objects/cd/5363a11e80a4711bf24f3bc39a72a4a5fcac38": "8cd99d74618f3dcee3b589937846fc3c",
".git/objects/d1/fecbebf8e41e5dc38b305f81cb80fc488871fb": "c3ef2def6fe052d2abc8173ce36667d1",
".git/objects/d2/5afab030e3b7ed8f0e121ffd9129c9da0a9acf": "ef0fc9289d27d4fc811f261e9d46ee1e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5c90e66f73077fb8b3b9b764c7cfe918c888c9": "2e9819131efe33e7bf8fe37da7893522",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/fe7efb085ca4bdf137eb5de7dbaa486568b73c": "a968bf4f4ba5ee547c004194acfce1b9",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/69ab10cdaa1fc38c9465d288537a92e467550e": "6408d2ccdd4ab0c3831673999fd0f331",
".git/objects/e0/648bcfd1a55454c5e0f22f8d6b8dec8b454ec4": "0c0addb28b402304afe76feaa39f240c",
".git/objects/e1/8003b2041d8220f7a746887cc55886f591673a": "228aeb381a3e00caf99f14d4d514a637",
".git/objects/e4/45d4700d0aa5659b6dee79ae21c6ac13533d3e": "ae13911a2ba4b139ae824a0257dca942",
".git/objects/e4/525f33b971926a2ea85e4b9ddcd010eade1ec6": "33bf212d7c7eb57d4ab8ecd2716fd3da",
".git/objects/e7/ef8aebd7d376c9567f5a644793a6294322b0f5": "4b50869b871e98f4b63b31d61a16ed6d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/e41b32b9f3293c117af68c5de0ff56979cfcf8": "e381ecbf892f1d29a7156d6f1a06a5c9",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/04c8cbdc45298e723e43f40d4221995c42e54b": "c3119b2e894b033dc3beb85735fd94a0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/5b0e7995332271b51baccbe476529c3ac4fab4": "f1915f54936af261e78e37f0a24e13e1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/19708b76f675f6ef747fbca7606b2c09e50925": "834066adfd1cea45429f0feeaa6fc092",
".git/objects/ff/9591739406f60a1a3a0fca5bd4a74ca1933d5c": "2176293305ce91c19e9ccc93b4249903",
".git/refs/heads/master": "4152a35a38dbb8929d793753b597dbb6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4152a35a38dbb8929d793753b597dbb6",
"assets/AssetManifest.bin": "1dc66f343dbdc5ee0166520fb1ee0bce",
"assets/AssetManifest.bin.json": "8afbafa652280e22279dfbbacc31c89e",
"assets/AssetManifest.json": "48810e879019cd5a2df94ee5fb0c9f9d",
"assets/assets/boot1.png": "955bdd6551f35253b0ef43f03a336bcd",
"assets/assets/college.png": "701ae65963f54201f4a721b998b8e5cb",
"assets/assets/cpp.png": "d70ae8c6942148cb6afcccaf48e7db95",
"assets/assets/css.png": "5b42a6f4a196fa67278a7e46971071c1",
"assets/assets/devsinn.png": "4c084cdb4c3d77356880dc7a8f8db2e7",
"assets/assets/facebook.png": "e526a5e3ac382ffffc4c18b39f64e72b",
"assets/assets/figma.png": "4dffa20e8a9a92f3e81db1ed3a7e69f5",
"assets/assets/fiza1.png": "bd6809e917d3ec4467089f03898e1e27",
"assets/assets/fiza2.jpg": "25590e79b0f38bedd94245970dda36f0",
"assets/assets/flutter.png": "958cbe2f60e63bbbe6571c136187a81b",
"assets/assets/git.png": "780091a5f20bf44185c12573e8d3c372",
"assets/assets/github.png": "26b890006914553d3bda3d357878c328",
"assets/assets/html.png": "856e4f2aa38a5e7825dc755f846d69ff",
"assets/assets/image1.png": "0eeb93dd1f387af9e2b4cd0783b64fd0",
"assets/assets/js.png": "274847fbc308551f853a2adb6998eff2",
"assets/assets/linkedn1.png": "5cef611c0c44d09b5691b70cc1408a2b",
"assets/assets/login.jpg": "0fb348030d3135c20a5c4346b69d89a7",
"assets/assets/php.png": "acf7498ba522e7d489c835342cd21b47",
"assets/assets/post1.png": "083727a7bfb4907a7a6bf46aa5a0e61b",
"assets/assets/RobotoSlab-VariableFont_wght.ttf": "614b8a3f8c7ad24b9286be1b7d578304",
"assets/assets/sans.ttf": "5b127e9e1cedad57860a5bb8b2cc9d61",
"assets/assets/school.png": "99329d6e7f02a2a123cd53ab6d2b18be",
"assets/assets/uni.jpeg": "2d9290f5039842c16f0650505b012e2e",
"assets/assets/vs.png": "bb28713a8d28d8e9bdcd06fa95a50178",
"assets/assets/whatsapp.png": "3812afe10e1a1eff31249f2f069c2b15",
"assets/FontManifest.json": "01c96f05d71d29d085759eb6593a97f3",
"assets/fonts/MaterialIcons-Regular.otf": "9bd415d7cc0176e1db0137ae15410e3b",
"assets/NOTICES": "0f0780514510d4e4cfd7926ed45dd29a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3aff4c4de2dc39e3b6fe9e9f310f7fbd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "971bd1122936506d4aa9634521bafabb",
"/": "971bd1122936506d4aa9634521bafabb",
"main.dart.js": "65c2b3dd062760de5c45190d7c5e63e4",
"manifest.json": "1f9c93ad7cc560cfca1e619b3576bbe0",
"version.json": "58250a58ccef6ff01542b0630c61cdcb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
