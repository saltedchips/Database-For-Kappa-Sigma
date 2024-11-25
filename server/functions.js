function showScreen(id) {
  document.querySelectorAll('div').forEach(div => div.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  if (id == 'members') {
    fetchMembers();
  }
}

function createMember(member) {
  const memberData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    studentId: document.getElementById('studentId').value,
    phoneNo: document.getElementById('phoneNo').value,
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zip: document.getElementById('zip').value,
  };

  fetch('/addMember', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(memberData),
  })
}

function fetchMembers() {
  fetch('/getMembers')
      .then(response => response.json())
      .then(data => {
          const membersList = document.getElementById('membersList');
          membersList.innerHTML = '';

          data.forEach(member => {
              const memberButton = document.createElement('button');
              memberButton.textContent = `${member.firstName} ${member.lastName}`;
              memberButton.onclick = () => viewMemberDetails(member.id);
              membersList.appendChild(memberButton);
          });
      })
      .catch(error => console.error('Error fetching members:', error));
}

function viewMemberDetails(memberId) {
  fetch(`/getMember/${memberId}`)
      .then(response => response.json())
      .then(member => {
          document.getElementById('memberName').textContent = `${member.firstName} ${member.lastName}`;
          document.getElementById('memberInfo').innerHTML = `
              <strong>Student ID:</strong> ${member.studentId}<br>
              <strong>Phone:</strong> ${member.phoneNo}<br>
              <strong>Address:</strong> ${member.street}, ${member.city}, ${member.state} ${member.zip}
          `;
          showScreen('memberDetails');
      })
      .catch(error => console.error('Error fetching member details:', error));
}


function committeeInfo(committeeID) {
  document.querySelector('#committeeBudget').innerText = data.budget
}
