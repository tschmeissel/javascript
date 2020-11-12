const source = [
  {
    properties: {
      filePath: {
        value: "e:\\testdaten\\email.msg"
      },
      storeId: {
        value: "111"
      },
      entryId: {
        value: "111"
      }
    }
  },
  {
    properties: {
      filePath: {
        value: "e:\\testdaten\\email.msg"
      },
      storeId: {
        value: "222"
      },
      entryId: {
        value: "222"
      }
    }
  },
  {
    properties: {
      filePath: {
        value: "e:\\testdaten\\email.msg"
      },
      storeId: {
        value: "333"
      },
      entryId: {
        value: "333"
      }
    }
  },
  {
    properties: {
      filePath: {
        value: "e:\\testdaten\\email.msg"
      },
      storeId: {
        value: "444"
      },
      entryId: {
        value: "444"
      }
    }
  },
  {
    properties: {
      filePath: {
        value: "e:\\testdaten\\email.msg"
      },
      storeId: {
        value: "555"
      },
      entryId: {
        value: "555"
      }
    }
  }
];

const hash = object => {
  return object.properties.storeId.value + object.properties.entryId.value;
};

const target = source.slice(2);

const missing = [];
source.forEach(x => {
  if (!target.find(y => hash(y) == hash(x))) {
    missing.push(x);
  }
});

console.log(missing.concat(target));
