export const formatDate = date => {
  let temp = date.split(' ')[0].split('-').reverse(),
    newFormat;
  temp[0] = temp.splice(1, 1, temp[0])[0];
  let month = parseInt(temp[0]);
  month = convertMonth(month);
  newFormat = temp[1] + ' ' + month + ' ' + temp[2];
  if (newFormat.charAt(0) === '0') {
    newFormat = newFormat.slice(1);
  }
  return newFormat;
};

export const convertMonth = month => {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'December',
  ];

  return monthNames[month - 1];
};

export const formatRupiah = (fee, prefix) => {
  var number_string = fee.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    residual = split[0].length % 3,
    rupiah = split[0].substr(0, residual),
    thousand = split[0].substr(residual).match(/\d{3}/gi);

  if (thousand) {
    separator = residual ? '.' : '';
    rupiah += separator + thousand.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? 'Rp ' + rupiah : '';
};
