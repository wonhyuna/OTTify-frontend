import axios from 'axios';

const Wonapi = axios.create({
  baseURL: 'http://52.79.200.90:8080', 
});

const fetchUserProfile = async (userId) => {
  try {
    const response = await Wonapi.get(`/api/v1/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchMyWrite = async (userId) => {
  try {
    const response = await Wonapi.get(`/api/v1/users/${userId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchMyFavorite = async (userId) => {
  try {
    const response = await Wonapi.get(`/api/v1/users/${userId}/likedReviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchMyHost = async (userId) => {
  try {
    const response = await Wonapi.get(`/api/v1/users/${userId}/discussion/hosting`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchMyParticipate = async (userId) => {
  try {
    const response = await Wonapi.get(`/api/v1/users/${userId}/discussion/participating`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchSavedGenre = async () => {
  try {
    const response = await Wonapi.get(`/api/v1/show/saved/genre`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const update1stGenre = async (updateRequestDto, userId) => {
  try {
    const response = await Wonapi.patch(`/api/v1/users/${userId}/1stGenre`, updateRequestDto);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const update2ndGenre = async (updateRequestDto, userId) => {
  try {
    const response = await Wonapi.patch(`/api/v1/users/${userId}/2ndGenre`, updateRequestDto);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const updateMyProfile = async (formData, userId) => {
  try {
    const response = await Wonapi.patch(`/api/v1/users/${userId}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchSavedOTT = async () => {
  try {
    const response = await Wonapi.get(`/api/v1/saved/ott`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const updateOTT = async (updateRequestDto, userId) => {
  try {
    const response = await Wonapi.patch(`/api/v1/users/${userId}/otts`, updateRequestDto);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchTotalDiscussion = async () => {
  try {
    const response = await Wonapi.get(`/api/v1/discussion/total`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
  }
};

const fetchProgramDiscussion = async (programId) => {
  try {
    const response = await Wonapi.get(`/api/v1/discussion/program`, {
      params: { programId: programId }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users from API:', error);
    throw error;
  }
};
const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwNjI1NTMyNCwiZW1haWwiOiJoeXVuYXdvbjQxN0BnbWFpbC5jb20ifQ.aI-cQRP9kBB8_mZCYdGP8mppGq43XwXz0S8pd7hZHJKI_e_o0dL7-OeLZ_g7M85i06cwCD6n4EwLf0HsjMpe0Q"

const createDiscussionSubject = async (formData) => {
  try {
    const response = await Wonapi.post('/api/v1/discussion/subject', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating discussion subject:', error);
    throw error;
  }
};

const editDiscussionSubject = async (formData) => {
  try {
    const response = await Wonapi.put('/api/v1/discussion/subject', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating discussion subject:', error);
    throw error;
  }
};



export { Wonapi, fetchUserProfile, fetchMyWrite, fetchMyFavorite, fetchMyHost, fetchMyParticipate,
  fetchSavedGenre, update1stGenre, update2ndGenre, updateMyProfile, fetchSavedOTT, updateOTT,
  fetchTotalDiscussion, fetchProgramDiscussion, createDiscussionSubject, editDiscussionSubject};
