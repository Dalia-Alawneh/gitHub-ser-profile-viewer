# GitHub User Profile Viewer

This project is a simple web application that allows users to view GitHub user profiles and their repositories.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

This application fetches user information and repositories from GitHub using the GitHub API. Users can enter a GitHub username in the search bar, and the application will display relevant details about that user, including their profile information and repositories.

## Features

- **User Profile Display**: Displays the user's profile picture, name, join date, username, and bio.
- **Repository Information**: Shows the number of repositories, followers, and following.
- **User Info**: Provides additional user information such as location, company, Twitter username, and blog.
- **Input Search optimization**: Debounce technique to limit the number of times an API request is sent.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github-profile-viewer.git
cd github-profile-viewer
```

2. Open `index.html` in a web browser.

## Usage

1. Open the web application in a web browser.
2. Enter a GitHub username in the search bar.
3. The application will fetch and display the user's profile information and repositories.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.
