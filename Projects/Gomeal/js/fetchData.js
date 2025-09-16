export async function loadData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log('✅ Data loaded:', data);
  return data;
}
