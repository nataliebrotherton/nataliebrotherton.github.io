"""Insta485 development configuration."""

import pathlib

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'z\xc9\xbd\xd6\xa5\xcbf0!8$$V\xa7+79\x1d\xf0\xcb\x12[\x18\xb3'
SESSION_COOKIE_NAME = 'login'

# File Upload to var/uploads/
PORTFOLIO_ROOT = pathlib.Path(__file__).resolve().parent.parent
UPLOAD_FOLDER = PORTFOLIO_ROOT/'var'/'uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif', 'pdf'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024

# Database file is var/insta485.sqlite3
# TODO: change to actual postgres DB filename
##DATABASE_FILENAME = PORTFOLIO_ROOT/'var'/'insta485.sqlite3'