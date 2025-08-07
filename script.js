function pad(n) {
  return n < 10 ? '0' + n : n;
}

function getKSTDate() {
  // UTC+9 (KST)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (9 * 60 * 60 * 1000));
}

function getDayKor(day) {
  return ['일', '월', '화', '수', '목', '금', '토'][day];
}

function updateClock() {
  const now = getKSTDate();
  let hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  if (hour === 0) hour = 12;

  const timeStr = `${pad(hour)}:${pad(min)}:${pad(sec)} <span class="ampm">${ampm}</span>`;
  document.getElementById('clock-time').innerHTML = timeStr;

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const date = pad(now.getDate());
  const day = getDayKor(now.getDay());
  document.getElementById('clock-date').textContent = `${year}.${month}.${date} (${day})`;
}

updateClock();
setInterval(updateClock, 1000);
