export function setData(key: string, data: any) {
    if ( typeof(Storage) !== 'undefined') {
        sessionStorage.setItem(key, JSON.stringify(data));
    } else {
        alert('Trình duyệt của bạn không hỗ trợ!');
    }
}

export function getData(key: string) {
    if ( typeof(Storage) !== 'undefined') {
        const dataFromSessionStorage = sessionStorage.getItem(key);
        if (dataFromSessionStorage !== null) {
            return JSON.parse(dataFromSessionStorage);
        }
        return null;
    } else {
        return null;
    }
}

export function removeData(key: string) {
    try {
        if ( typeof(Storage) !== 'undefined') {
            sessionStorage.removeItem(key);
        }
      }
    catch {
    
    }
}

export function clearData() {
    if ( typeof(Storage) !== 'undefined') {
        sessionStorage.clear();
    } else {
        alert('Trình duyệt của bạn không hỗ trợ!');
    }
}