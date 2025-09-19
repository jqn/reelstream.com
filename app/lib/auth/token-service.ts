class TokenService {
  private token: string | null = null;
  private tokenExpiry: number = 0;

  async getToken(): Promise<string | null> {
    // Return cached token if still valid
    if (this.token && Date.now() < this.tokenExpiry) {
      return this.token;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/token`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.token = data.token;

      // Set expiry time - adjust based on your API response structure
      // Assuming the API returns expiresIn in seconds, or default to 1 hour
      const expiresIn = data.expiresIn || 3600;
      this.tokenExpiry = Date.now() + expiresIn * 1000;

      return this.token;
    } catch (error) {
      console.error("Token fetch failed:", error);
      this.token = null;
      this.tokenExpiry = 0;
      return null;
    }
  }

  // Clear cached token (useful for logout)
  clearToken(): void {
    this.token = null;
    this.tokenExpiry = 0;
  }

  // Check if token is currently valid (useful for UI state)
  hasValidToken(): boolean {
    return this.token !== null && Date.now() < this.tokenExpiry;
  }
}

// Export singleton instance
export const tokenService = new TokenService();
