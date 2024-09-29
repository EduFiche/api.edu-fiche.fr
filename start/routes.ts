/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '../app/controllers/auth_controller.js'
export const API_VERSION = 'v1'

router
  .group(() => {
    router.post('/auth/login', [AuthController, 'login'])
    router.post('/auth/register', [AuthController, 'register'])
    router.post('/auth/logout', [AuthController, 'logout'])
  })
  .prefix(`/api/${API_VERSION}`)
