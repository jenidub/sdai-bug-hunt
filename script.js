// JS Bug #1 Line 1 - requires document.getElementById('')
// JS Bug #2 Line 1 - the ID funfactButton should have been funFactButton
document.getElementById('funFactButton').addEventListener('click', function() {
  // JS Bug #3 Line 4 - the ID funfact should have been funFact  
  const funFact = document.getElementById('funFact');
  if (funFact.style.display === 'none') {
      funFact.style.display = 'block';
  } else {
      funFact.style.display = 'none';
  }
});
