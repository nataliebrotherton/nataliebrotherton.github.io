"""
Insta485 python package configuration.
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
        'psycopg2-binary'
    ],
    python_requires='>=3.6',
)