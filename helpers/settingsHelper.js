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
        name: 'Date format',
        dependsOn: 'topbar-show-date',
        dependsOnValue: true,
        localStorageKey: 'topbar-date-format',
        id: 'topbar-date-format',
        type: 'select',
        options: [
          {
            name: 'dd/mm/yyyy',
            value: 'dd/mm/yyyy',
          },
          {
            name: 'dd/mm',
            value: 'dd/mm',
          },
          {
            name: 'dd',
            value: 'dd',
          },
        ],
        value: 'dd/mm/yyyy',
      },
      {
        name: 'Show time',
        localStorageKey: 'topbar-show-time',
        id: 'topbar-show-time',
        type: 'checkbox',
        value: true
      },
      {
        name: 'Time format',
        dependsOn: 'topbar-show-time',
        dependsOnValue: true,
        localStorageKey: 'topbar-time-format',
        id: 'topbar-time-format',
        type: 'select',
        options: [
          {
            name: 'hh:mm:ss',
            value: 'hh:mm:ss',
          },
          {
            name: 'hh:mm',
            value: 'hh:mm',
          },
          {
            name: 'hh',
            value: 'hh',
          },
        ],
        value: 'hh:mm:ss',
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
        name: 'Ping domain',
        dependsOn: 'topbar-show-ping',
        dependsOnValue: true,
        localStorageKey: 'topbar-ping-domain',
        id: 'topbar-ping-domain',
        type: 'text',
        value: 'https://jsonplaceholder.typicode.com/todos/1'
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
  } else if (setting.type === 'text' || setting.type === 'number') {
    if (settingValue === null) {
      return setting.value;
    }
    return settingValue;
  } else if (setting.type === 'checkbox') {
    if (settingValue === null) {
      return setting.value;
    }
    return settingValue === 'true';
  }
}

export { findSetting, getSettingValue, settings };
