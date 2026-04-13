export const sendEmail = async (formData) => {
  formData.append("access_key", "7aec4ef4-499b-4cac-b9a3-1ff49683ee53");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return { success: data.success, data };
  } catch (error) {
    console.error("Network error:", error);
    return { success: false, error };
  }
};