const colors = ['Blue', 'Red', 'Green', 'Orange', 'Yellow'];

for (let i=0; i<colors.length; i++) {
  console.log(colors[i]);
}

for (const color of colors) {
  console.log(color); 
}

colors.forEach(color => {console.log(color);});

