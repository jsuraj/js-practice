// Interview question about feature flags
// reference: https://www.youtube.com/watch?v=pxPVsZyMcb4&ab_channel=DevtoolsTech

const SAMPLE_FEATURES = {
  show_dialog_box: true,
  enable_new_pricing: true,
};

const Cache = {
  featureFlags: {},
  timeStamp: null,
};

const MAX_CACHE_TTL = 10000;
let fetchInstance = null;

function fetchAllFeatures() {
  console.log('Call to BE');

  return new Promise((resolve) => {
    setTimeout(() => resolve(SAMPLE_FEATURES), 100);
  });
};

function getFeatureState(featureName, defaultValue) {
  const isCacheDataPresent = Object.keys(Cache.featureFlags).length;
  const isCachedDataLatest = Date.now() - Cache.timeStamp < MAX_CACHE_TTL;

  if (isCacheDataPresent && isCachedDataLatest) {
    console.log('Returning from cache', featureName);
    const value = Object.prototype.hasOwnProperty.call(Cache.featureFlags, featureName)
      ? Cache.featureFlags[featureName]
      : defaultValue;

    return Promise.resolve(value);
  }

  if (fetchInstance instanceof Promise) {
    return fetchInstance.then(() => {
      console.log('From promise callback', featureName);
      return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
        ? featureFlags[featureName]
        : defaultValue;
    }).catch(() => defaultValue);
  }
  fetchInstance = fetchAllFeatures()
    .then((featureFlags) => {
      Cache.featureFlags = featureFlags;
      Cache.timeStamp = Date.now();

      return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
        ? featureFlags[featureName]
        : defaultValue;
    })
    .catch(() => defaultValue)
  
  return fetchInstance;
}

getFeatureState('show_dialog_box', false).then((isEnabled) => {
  if (isEnabled) {
    console.log('show_dialog_box enabled');
  } else {
    console.log('show_dialog_box disabled');
  }
});

getFeatureState('show_pricing_v2', false).then((isEnabled) => {
  if (isEnabled) {
    console.log('show_pricing_v2 enabled');
  } else {
    console.log('show_pricing_v2 disabled');
  }
});

setTimeout(() => {
  getFeatureState('enable_new_pricing', false).then((isEnabled) => {
    if (isEnabled) {
      console.log('enable_new_pricing enabled');
    } else {
      console.log('enable_new_pricing disabled');
    }
  });  
}, 300);
