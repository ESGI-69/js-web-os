const settings = [
  {
    categoryName: 'General',
    settings: [
      {
        name: 'Vibration',
        localStorageKey: 'os-vibration',
        id: 'os-vibration',
        type: 'checkbox',
        value: true
      },
    ],
  },
  {
    categoryName: 'Topbar',
    settings: [
      {
        name: 'Show date',
        localStorageKey: 'topbar-show-date',
        id: 'topbar-show-date',
        type: 'checkbox',
        value: true
      },
      {
        name: 'Show time',
        localStorageKey: 'topbar-show-time',
        id: 'topbar-show-time',
        type: 'checkbox',
        value: true
      },
      {
        name: 'Show battery',
        localStorageKey: 'topbar-show-battery',
        id: 'topbar-show-battery',
        type: 'checkbox',
        value: true
      },
      {
        name: 'Show ping',
        localStorageKey: 'topbar-show-ping',
        id: 'topbar-show-ping',
        type: 'checkbox',
        value: true
      },
      {
        name: 'Show vibration status',
        localStorageKey: 'topbar-show-vibration-status',
        id: 'topbar-show-vibration-status',
        type: 'checkbox',
        value: true
      },
    ],
  },
];

const findSetting = (settingId) => {
  for (let i = 0; i < settings.length; i++) {
    const category = settings[i];
    for (let j = 0; j < category.settings.length; j++) {
      const setting = category.settings[j];
      if (setting.id === settingId) {
        return setting;
      }
    }
  }
  console.warn(`Setting with id ${settingId} not found`);
  return null;
}

const getSettingValue = (setting) => {
  const settingValue = localStorage.getItem(setting.localStorageKey);
  if (setting.type === 'select') {
    if (settingValue === null) {
      return setting.value;
    }
    return settingValue;
  } else {
  if (settingValue === null) {
    return setting.value;
  }
  return settingValue === 'true';
  }
}

export { findSetting, getSettingValue, settings };
