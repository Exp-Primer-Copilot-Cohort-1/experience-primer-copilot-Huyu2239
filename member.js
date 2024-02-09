function skillsMembers() {
  var members = [];
  var skills = [];
  var index = 0;
  var data = [];
  
  return {
    addMember: function(name, skills) {
      members.push(name);
      data.push(skills);
    },
    addSkill: function(skill) {
      skills.push(skill);
    },
    getMember: function(name) {
      return members.indexOf(name);
    },
    getSkill: function(skill) {
      return skills.indexOf(skill);
    },
    getSkills: function() {
      return skills;
    },
    getMembers: function() {
      return members;
    },
    getMemberSkills: function(member) {
      return data[member];
    },
    getSkillMembers: function(skill) {
      var result = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf(skill) !== -1) {
          result.push(members[i]);
        }
      }
      return result;
    }
  };
}
