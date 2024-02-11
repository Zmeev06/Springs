export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}
export async function getCurrentLocation(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(error)
      );
    } else {
      reject(new Error('Геолокация не поддерживается в вашем браузере'));
    }
  });
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const earthRadiusKm: number = 6371;

  const dLat: number = degreesToRadians(lat2 - lat1);
  const dLon: number = degreesToRadians(lon2 - lon1);

  const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance: number = earthRadiusKm * c;
  return distance;
}

export function calculateTime(distance: number): string {
  // Средняя скорость человека пешком, км/ч
  const walkingSpeedKmPerHour: number = 5;
  // Расчет времени в часах
  const timeHours: number = distance / walkingSpeedKmPerHour;

  // Извлекаем целую часть времени (часы)
  const hours: number = Math.floor(timeHours);
  // Рассчитываем остаток (минуты)
  const minutes: number = Math.round((timeHours - hours) * 60);

  // Форматируем время в строку "часы:минуты"
  return `${hours ? hours + ' ч' : ''} ${minutes} мин`;
}