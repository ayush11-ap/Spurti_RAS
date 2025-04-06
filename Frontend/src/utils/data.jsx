export const renderRoleSpecificFields = (
  role,
  setOrganizationName,
  setRegistrationNumber,
  setFocusArea,
  setExpertise,
  setDonationPreference,
  setSkills,
  setPreferredArea
) => {
  switch (role) {
    case "NGO":
      return (
        <div className="space-y-2">
          <label className="fieldset-legend">Organization Name</label>
          <input
            type="text"
            onChange={(e) => setOrganizationName(e.target.value)}
            className="input w-full"
            placeholder="Organization Name"
          />
          <label className="fieldset-legend">Registration Number</label>
          <input
            type="text"
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="input w-full"
            placeholder="Registration Number"
          />
          <label className="fieldset-legend">Focus Area</label>
          <select
            onChange={(e) => setFocusArea(e.target.value)}
            className="select w-full"
          >
            <option value="">Select Focus Area</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Environment">Environment</option>
            <option value="Child Welfare">Child Welfare</option>
            <option value="Women Empowerment">Women Empowerment</option>
            <option value="Other">Other</option>
          </select>
        </div>
      );
    case "Expert":
      return (
        <div className="space-y-4">
          <label className="fieldset-legend">Area of Expertise</label>
          <input
            type="text"
            onChange={(e) => setExpertise(e.target.value)}
            className="input w-full"
            placeholder="Area of Expertise"
          />
        </div>
      );
    case "Donor":
      return (
        <div className="space-y-4">
          <label className="fieldset-legend">Donation Preference</label>
          <select
            onChange={(e) => setDonationPreference(e.target.value)}
            className="select w-full"
          >
            <option value="">Select Donation Preference</option>
            <option value="Monetary">Monetary</option>
            <option value="Resources">Resources</option>
            <option value="Skills">Skills</option>
            <option value="Funds">Funds</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>
      );
    case "volunteer":
    case "Spurti Volunteer":
      return (
        <div className="space-y-4">
          <label className="fieldset-legend">Skills</label>
          <input
            type="text"
            onChange={(e) => setSkills(e.target.value)}
            className="input w-full"
            placeholder="Skills"
          />
          <label className="fieldset-legend">Preferred Area</label>
          <select
            onChange={(e) => setPreferredArea(e.target.value)}
            className="select w-full"
          >
            <option value="">Select Preferred Area</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Community Development">Community Development</option>
            <option value="Environmental Conservation">
              Environmental Conservation
            </option>
            <option value="Child Welfare">Child Welfare</option>
            <option value="Other">Other</option>
          </select>
        </div>
      );
    default:
      return null;
  }
};
