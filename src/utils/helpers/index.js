export function getHeight(status) {
  switch (status) {
    case 'requested': return 194;
    case 'sold' : return 176;
    case 'reserved': case 'onDelivery' : return 266;
  }
}