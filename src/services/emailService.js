export const sendEmail = async (formData) => {
  formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

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