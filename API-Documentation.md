# API DOCUMENTATION

## HOST: https://be-project.up.railway.app

## Sign Up [/signup]

### Sign Up [POST]

Fitur untuk daftar akun user

- Request

        {
           "full_name": "full_name",
           "username": "username",
           "email": "email",
           "password": "password",
           "status": "status"
        }

- Response 201 (application/json)
  <br>Body
  <br>
  ```
  {
    "user": "user _id",
    "username": "username",
    "email": "email",
    "status": "role"
  }
  ```

## Sign In [/signin]

### Sign In [POST]

Fitur untuk login

- Request

        {
           "username": "Username",
           "password": "Password"
        }

- Response 201 (application/json)
  <br>Body
  ```
  {
     "user": "user _id",
     "status": "status",
     "token": "token",
  }
  ```

## Users [/users]

### Daftar semua users [GET]

Fitur untuk melihat data pegawai hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Response 200 (application/json)
  ```
  {
    "data": [
                {
                    "_id": "_id",
                    "full_name": "full_name",
                    "username": "username",
                    "email": "email",
                    "password": "password",
                    "status": "status"
                },
                {
                    "_id": "_id",
                    "full_name": "full_name",
                    "username": "username",
                    "email": "email",
                    "password": "password",
                    "status": "status"
                }
            ]
  }
  ```

## Users [/users/:id]

### Mengambil data user berdasarkan id [GET]

- Response 200 (application/json)

        "user":
            {
              "_id": "_id",
              "full_name": "full_name",
              "username": "username",
              "email": "email",
              "password": "password",
              "status": "status"
            }

### Edit User [PUT]

hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Request

        {
            "_id": "_id",
            "full_name": "full_name",
            "username": "username",
            "email": "email",
            "password": "password",
            "status": "status"
        }

- Response 200 (application/json)

        {
          "user": "Berhasil update user",
          "user _id"
        }

### Hapus data user berdasarkan id [DELETE]

hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Response 200 (application/json)
- body

        {
            "message": "user berhasil dihapus"
        }

## Articles[/articles]

### Daftar semua articles [GET]

- Response 200 (application/json)

  ```
  {
      "article": [
          {
              "_id": "_id"
              "title": "title",
              "description": "description"

          },
          {
              "_id": "_id"
              "title": "title",
              "description": "description"

          }
      ]
  }
  ```

### B Tambah data Article [POST]

Fitur menambahkan data article dengan role admin

- Headers
  <br>Authorizaton: token

- Request

          {
            "title": "title",
            "description": "description"
          }

- Response 201 (application/json)
  <br>Body
  {
  "message": "Success"
  }

## Article [/articles/:id]

### Mengambil data article berdasarkan id [GET]

- Response 200 (application/json)

        "article":
              {
                "_id": "_id"
                "title": "title",
                "description": "description"
              }

### Edit data articles berdasarkan id [PUT]

hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Request

        {
            "title": "title",
            "description": "description"
        }

- Response 201 (application/json)
  <br>Body

        {
          "updated_article":
          "_id": "_id"
          "title": "title",
          "description": "description",
          "pic": "pic"
        }

### Hapus data articles berdasarkan id [DELETE]

hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Response 200 (application/json)
  <br>body
  {
  "message": "article berhasil dihapus"
  }

## Video[/videos]

### Daftar semua video [GET]

- Response 200 (application/json)

        [
            {
                "_id": "_id"
                "title": "title",
                "description": "description",
                "link" : "link",
                "thumbnail": "thumbnail"

            },
            {
                "_id": "_id"
                "title": "title",
                "description": "description",
                "link" : "link",
                "thumbnail": "thumbnail"
            }
        ]

### Tambah data video [POST]

Fitur menambahkan datar users dengan role admin hanya bisa diakses oleh admin

- Headers
  <br>Authorizaton: token

- Request

          [
              {
                  "title": "title",
                  "description": "description",
                  "link" : "link",
                  "thumbnail": "thumbnail"
              }
          ]

- Response 201 (application/json)

  - Body

        {
          "message": "Success"
        }

## vidio [/videos/:id]

### Mengambil data video berdasarkan id [GET]

- Response 200 (application/json)

        {
            "title": "title",
            "description": "description",
            "link" : "link",
            "thumbnail": "thumbnail"
        }

### Edit data vidio berdasarkan id [PUT]

hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Request

          "video":
              {
                "title": "title",
                "description": "description",
                "link" : "link",
                "thumbnail": "thumbnail"
              }

- Response 200 (application/json)
  <br>Body
          {
              "updated video":
              "_id": "_id"
              "title": "title",
              "description": "description",
              "link" : "link",
              "thumbnail": "thumbnail"
          }

### Hapus data video berdasarkan id [DELETE]

hanya bisa diakses oleh role admin

- Headers
  <br>Authorizaton: token

- Response 200 (application/json)
  <br>body
        {
          "message": "video berhasil dihapus"
        }
