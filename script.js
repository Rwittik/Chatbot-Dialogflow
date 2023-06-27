const hobbies = [
    {
      name: 'Reading',
      description: 'Expand your mind and escape reality with a good book.'
    },
    {
      name: 'Gardening',
      description: 'Grow your own food and create a beautiful outdoor space.'
    },
    {
      name: 'Cooking',
      description: 'Experiment with flavors and create delicious meals for yourself and others.'
    },
    {
      name: 'Hiking',
      description: 'Explore the great outdoors and get some exercise while you do it.'
    },
    {
      name: 'Photography',
      description: 'Capture beautiful moments and express your creativity through photography.'
    },
    {
      name: 'Painting',
      description: 'Create beautiful works of art and express yourself through color and form.'
    },
    {
      name: 'Knitting',
      description: 'Create warm and cozy items for yourself and loved ones with this relaxing hobby.'
    },
    {
      name: 'Dancing',
      description: 'Get some exercise and express yourself through movement with dance.'
    },
    {
      name: 'Playing an instrument',
      description: 'Create beautiful music and express yourself through sound with this rewarding hobby.'
    }
  ];
  
  function searchHobbies(query) {
    const results = hobbies.filter(hobby =>
      hobby.name.toLowerCase().includes(query.toLowerCase())
    );
    return results;
  }
  
  function showResults(results) {
    const container = document.getElementById('results');
    container.innerHTML = '';
    if (results.length === 0) {
      container.innerHTML = 'No results found.';
      return;
    }
    results.forEach(result => {
      const div = document.createElement('div');
      const heading = document.createElement('h3');
      const description = document.createElement('p');
      heading.textContent = result.name;
      description.textContent = result.description;
      div.appendChild(heading);
      div.appendChild(description);
      container.appendChild(div);
    });
  }
  
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('hobby-search');
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    const results = searchHobbies(query);
    showResults(results);
  });
  
  // Chatbot code

  