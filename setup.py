"""
portfolio python package configuration.
"""

from setuptools import setup

setup(
    name='portfolio',
    version='0.1.0',
    packages=['portfolio'],
    include_package_data=True,
    install_requires=[
        'arrow',
        'bs4',
        'Flask',
        'html5validator',
        'pycodestyle',
        'pydocstyle',
        'pylint',
        'pytest',
        'pytest-mock',
        'requests',
        'psycopg2-binary',
        'flask-sqlalchemy',
        'flask-migrate'
    ],
    python_requires='>=3.6',
)