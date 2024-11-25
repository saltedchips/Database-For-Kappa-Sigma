const express = require('express');
const router = express.Router();
const Services = require('./services');

const services = new Services(yourSequelizeInstance);

function showScreen(id) {
  document.querySelectorAll('div').forEach(div => div.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  if (id == 'members') {
    fetchMembers();
  }
}

router.post('/addMember', async (req, res) => {
  try {
    const { studentId, firstName, lastName, phoneNo, street, city, state, zip } = req.body;

    const newMember = await services.createUser({
      student_id: studentId,
      fname: firstName,
      lname: lastName,
      phone_num: phoneNo,
      street: street,
      city: city,
      state: state,
      zip: zip,
    });

    console.log('Member added:', newMember);
    res.status(201).json({ success: true, member: newMember });
  } catch (err) {
    console.error('Error adding member:', err);
    res.status(500).json({ success: false, error: 'Failed to add member.' });
  }
});

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

module.exports = router;